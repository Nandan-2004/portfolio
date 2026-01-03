import { NextResponse } from 'next/server';

// This API route is kept only to avoid breaking any existing clients.
// The contact form on the site no longer calls this endpoint and instead
// opens the user's email application directly via a mailto: link.
export async function POST() {
  return NextResponse.json(
    {
      error:
        'This contact endpoint is no longer used. Please use the contact form on the website, which opens your email app directly.',
    },
    { status: 410 },
  );
}
