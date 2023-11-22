import os
from flask import jsonify, request, Flask
import subprocess

app = Flask(__name__)

@app.route("/")
def index():
    return "Ola!"

@app.route("/tokenizacion/", methods=["POST"])
def tokenizar():
    if  request.method == "POST":
        request.get_data()
        texto = request.data.decode('utf-8')

        with open("Output.txt", "w") as text_file:
            text_file.write(texto)

#        os.system()
        result = subprocess.check_output('./tokenizador Output.txt', text=True)
        print(result)
        return jsonify(result)
    else:
        return jsonify("Error xd")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)