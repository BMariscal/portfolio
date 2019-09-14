import json
from flask import Flask, make_response, request, redirect, url_for
from .database import models

app = models.app
db = models.db
Blog = models.Blog

@app.route('/')
def root():
    return make_response(json.dumps('Welcome!'))


@app.route('/entry/<id>')
def fetch_blog_entry(id):
    blog = Blog.query.get(id)

    arr = []
    obj = {"id": blog.id , "date": blog.date.strftime('%m/%d/%Y'), "title": blog.title, "summary": blog.summary, "content": blog.content}
    arr.append(obj)
    resp = make_response(json.dumps(arr))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route('/blogs')
def fetch_all_blog_entries():
    blog_post = Blog.query.all()

    arr = []
    for blog in blog_post:
        obj = {"id": blog.id, "date": blog.date.strftime('%m/%d/%Y'),"title": blog.title, "summary": blog.summary, "content": blog.content}
        arr.append(obj)
    resp = make_response(json.dumps(arr))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/create_post', methods = ['POST'])
def create_blog_entry():
    if request.method == 'POST':
        title = request.form['title']
        summary = request.form['summary']
        content = request.form['content']

        new_blog = Blog(title=title, summary=summary, content=content)
        db.session.add(new_blog)
        db.session.commit()
        resp = make_response(json.dumps('Entity created'))
    else:
        resp = make_response(json.dumps('Incorrect request method'))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


if __name__ == "__main__":
    app.run(host="0.0.0.0")
