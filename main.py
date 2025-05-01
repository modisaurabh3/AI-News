from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scraper import scrape_articles
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/articles")
def get_articles():
    with open("data/articles.json", "r") as f:
        return json.load(f)

@app.post("/api/scrape")
def run_scraper():
    scrape_articles()
    return {"status": "success"}