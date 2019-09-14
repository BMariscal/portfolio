import datetime
import logging

from ..database import connect_db

db = connect_db.db
app = connect_db.app

class Blog(db.Model):
    __tablename__ = 'blog'
    id = db.Column(db.Integer, primary_key=True)
    date =  db.Column(db.DateTime, default=datetime.datetime.utcnow)
    title = db.Column(db.String(1500))
    summary = db.Column(db.String(1500))
    content = db.Column(db.Text)


    def __init__(self, title=None, summary=None, content=None):
        self.title = title
        self.summary = summary
        self.content = content


    def __repr__(self):
        return '<Title> {}'.format(self.title)

db.create_all()
logging.info("DB HERE {}".format(db))
