from flask import Flask, jsonify, request, make_response
import requests
import json

app = Flask(__name__)

@app.route('/api/submit_pfb', methods=['POST'])
def submit_pfb():
    try:
        data = request.get_json()
        url = data['url']
        payload = data['payload']
        headers = {'Content-Type': 'application/json'}
        response = requests.post(url, data=json.dumps(payload), headers=headers)
        return response.json()
    except Exception as e:
        return make_response(jsonify({'error': str(e)}), 500)

@app.route('/api/get', methods=['GET'])
def get_value():
    return "Get working"

if __name__ == '__main__':
    app.run()
