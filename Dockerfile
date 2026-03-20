FROM n8nio/n8n

# Core n8n Configuration
ENV N8N_HOST=0.0.0.0
ENV N8N_PORT=5678
ENV N8N_PROTOCOL=https

# Security & Production Settings
ENV N8N_ENCRYPTION_KEY=changeme_set_in_render_env_vars
ENV N8N_DB_TYPE=postgres

# API Keys (Set these in Render environment variables)
# Don't commit real keys - these are placeholders
ENV GROQ_API_KEY=${GROQ_API_KEY}

# Optional: Webhook security
ENV N8N_WEBHOOK_URL=${N8N_WEBHOOK_URL}

EXPOSE 5678