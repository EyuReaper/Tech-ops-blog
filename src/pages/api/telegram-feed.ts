import type { APIRoute } from 'astro';

const TELEGRAM_BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN;
const CHANNEL_USERNAME = 'techopschannel';

export const GET: APIRoute = async () => {
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?limit=5`
    );
    const data = await res.json();

    // Filter messages from your channel
    const messages = data.result
      .filter((m: any) => m.message?.chat?.username === CHANNEL_USERNAME)
      .slice(0, 5)
      .map((m: any) => ({
        text: m.message.text?.split('\n')[0] || 'Update',
        link: m.message.entities?.[0]?.type === 'url' ? m.message.text : null,
        time: new Date(m.message.date * 1000).toRelativeTime(),
      }));

    return new Response(JSON.stringify(messages), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify([]), { status: 500 });
  }
};