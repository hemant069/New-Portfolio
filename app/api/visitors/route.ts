// app/api/umami-stats/route.js

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const UMAMI_URL = process.env.UMAMI_URL;
    const WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;
    const API_TOKEN = process.env.UMAMI_API_TOKEN;

    if (!UMAMI_URL || !WEBSITE_ID || !API_TOKEN) {
      return NextResponse.json(
        { error: 'Missing Umami environment variables' },
        { status: 500 }
      );
    }

    // last 30 days
    const endAt = Date.now();
    const startAt = endAt - 30 * 24 * 60 * 60 * 1000;

    const url = `${UMAMI_URL}/analytics/us/api/websites/${WEBSITE_ID}/stats?startAt=${startAt}&endAt=${endAt}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: 'application/json',
      },
      // avoid caching secrets on edge
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: 'Umami API error',
          status: response.status,
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      pageviews: data.pageviews?.value ?? 0,
      visitors: data.visitors?.value ?? 0,
      bounceRate: data.bounceRate?.value ?? 0,
      visitDuration: data.visitDuration?.value ?? 0,
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal error', message: err.message },
      { status: 500 }
    );
  }
}
