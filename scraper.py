import json
from datetime import datetime

def scrape_articles():
    dummy_data = [
        {
            "title": "Budget Cuts at Midwestern University",
            "url": "https://example.com/article1",
            "state": "IL",
            "summary": "Midwestern U announces 10% budget cuts.",
            "date": str(datetime.utcnow())
        },
        {
            "title": "New Chancellor at SUNY Albany",
            "url": "https://example.com/article2",
            "state": "NY",
            "summary": "Leadership shakeup in SUNY system.",
            "date": str(datetime.utcnow())
        }
    ]
    with open("data/articles.json", "w") as f:
        json.dump(dummy_data, f)