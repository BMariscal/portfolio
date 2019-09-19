from flask import Flask, make_response, request, redirect, url_for, jsonify
from flask_cors import CORS,cross_origin
from .database import models

app = models.app
db = models.db
Blog = models.Blog

app.config['CORS_HEADERS'] = 'Content-Type'

CORS(app, support_credentials=True)


@app.route('/',  methods=['GET','OPTIONS'])
def root():
    return make_response(jsonify('Welcome!'))


@app.route('/entry/<id>', methods=['GET','OPTIONS'])
@cross_origin(supports_credentials=True)
def fetch_blog_entry(id):
    blog = Blog.query.get(id)
    arr = []
    obj = {"id": blog.id , "date": blog.date.strftime('%m/%d/%Y'), "title": blog.title, "summary": blog.summary, "content": blog.content}
    arr.append(obj)
    resp = make_response(jsonify(arr))
    return resp


@app.route('/blogs', methods=['GET','OPTIONS'])
@cross_origin(supports_credentials=True)
def fetch_all_blog_entries():
    blog_post = Blog.query.all()
    arr = []
    for blog in blog_post:
        obj = {"id": blog.id, "date": blog.date.strftime('%m/%d/%Y'),"title": blog.title, "summary": blog.summary, "content": blog.content}
        arr.append(obj)
    resp = make_response(jsonify(arr))
    return resp


@app.route('/create_post', methods=['POST', 'OPTIONS'])
def create_blog_entry():
    if request.method == 'POST':
        title = request.form['title']
        summary = request.form['summary']
        content = request.form['content']

        new_blog = Blog(title=title, summary=summary, content=content)
        db.session.add(new_blog)
        db.session.commit()
        resp = make_response(jsonify('Entity created'))
    else:
        resp = make_response(jsonify('Incorrect request method'))
    return resp


if __name__ == "__main__":
    app.run(host="0.0.0.0")
