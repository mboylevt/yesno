from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
def hello():
    return render_template('hello.html')

@app.route('/yesno')
def yesno():
    return render_template('yesno.html')

@app.route('/yesnoreal')
def yesnoreal():
    return render_template('yesnoreal.html')


if __name__ == '__main__':
    app.run(debug=True)
