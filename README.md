# Higher Ed News SaaS Prototype

## 🔧 Setup Instructions

1. Upload this code to a new GitHub repo.
2. Go to [https://replit.com](https://replit.com) → Create App → **Import from GitHub**
3. Replit will detect and install everything.
4. To run the backend:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```
5. To run the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 📦 Stack
- FastAPI backend (Python)
- React frontend (Vite)
- JSON file for data store
- Replit-compatible with `replit.nix`

You're good to go! 🎉