#!/usr/bin/env python3

from config import app, api
from flask import request, make_response, session, jsonify
from flask_restful import Resource
from models import User, Book, ReadingLog

class Users(Resource):
  def get(self):
    users = [user.to_dict() for user in User.query.all()]
    return make_response(jsonify(users), 200)
  
api.add_resource(Users, '/users')

class Auth(Resource):
    def get(self):
        try:
            user = User.query.filter_by(id=session['user_id']).first()
            return make_response(user.to_dict(), 200)
        except:
            return('Unauthorized', 401)

api.add_resource(Auth, '/auth')

class Signup(Resource):
    def post(self):
        try:
            data = request.get_json()
            user = User(username=data['username'], email=data['email'])
            user.password_hash = data['password']

            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id

            return make_response(user.to_dict(), 201)
        except:
            return ('Error in signing up', 422)
        
api.add_resource(Signup, '/signup')

if __name__ == "__main__":
  app.run(port=5555, debug=True)
