import {ImageResponse} from 'next/og';

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 40,
                    color: 'black',
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    padding: '50px 200px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    position: 'relative'
                }}
            >
                <div style={{
                    height: '50%',
                    background: 'red',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0
                }}></div>
                👋 Hello
            </div>
        ),
        {
            width: 1000,
            height: 2000,
        },
    );
}
