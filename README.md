# Base Check-In

A Base Mini App for gasless event badge minting with Farcaster integration.

## Features

- 🎫 Gasless badge minting on Base
- 🔵 Farcaster Frame integration
- 💳 OnchainKit wallet connection
- 🎨 Coinbase-themed UI
- 📱 Mobile-first responsive design
- 🔔 Success notifications and sharing

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Farcaster Frame SDK
- Tailwind CSS
- TypeScript

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## Manifest

The Farcaster manifest is located at `.well-known/farcaster.json` and configures:
- Frame metadata
- Account association
- Webhook endpoints
- App discovery settings

## License

MIT
