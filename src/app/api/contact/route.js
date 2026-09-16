import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        
        const response = await fetch('https://api.airtable.com/v0/appN84Ne5qm9yZdgV/nunnari', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                records: [{
                    fields: {
                        'First Name': data.firstName,
                        'Last Name': data.lastName,
                        'Email': data.email,
                        'Mobile': data.phone,
                        'Comments': data.message
                    }
                }]
            })
        });

        if (!response.ok) {
            throw new Error('Failed to submit to Airtable');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 500 }
        );
    }
} 