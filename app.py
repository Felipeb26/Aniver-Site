from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/cadastro.html")
def cadastro():
    return render_template("cadastro.html")

@app.route("/login.html")
def login():
    return render_template("login.html")

@app.route("/pesquisa.html")
def pesquisa():
    return render_template("pesquisa.html")

@app.route("/token.html")
def token():
    return render_template("token.html")

if __name__ == "__main__":
    app.run(debug=True)