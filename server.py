from pathlib import Path
import subprocess
import tempfile

import flask


app = flask.Flask(__name__)


@app.route('/')
def hello():
    return flask.render_template('index.html')


@app.route('/code', methods=['POST'])
def make_code():
    code = flask.request.form['code']

    usercode = Path('usercode')
    usercode.mkdir(exist_ok=True)

    robot_py = usercode / 'robot.py'

    with robot_py.open('w') as file:
        file.write(code)

    subprocess.check_call(['zip-packager/make-zip', 'ABC', str(usercode), 'robot.zip', '-w', 'wifi.yaml'])

    robot_py.unlink()
    usercode.rmdir()

    return flask.send_file('robot.zip')

if __name__ == "__main__":
    app.run(debug=True)
