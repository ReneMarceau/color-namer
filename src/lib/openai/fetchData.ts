export default async function getResponse(prompt: string) {
    const response = await fetch('/api/fetchOpenAI', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    return data;
}