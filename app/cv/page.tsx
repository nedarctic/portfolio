import Image from 'next/image';

export default function CVPage() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            width: '100%',
        }}>
            <div style={{ width: '100%', maxWidth: 900, padding: 16 }}>
                <Image
                    src="/justuskimtaicv.png"
                    alt="Justus Kimtai CV"
                    layout="responsive"
                    width={900}
                    height={1273}
                    style={{ borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.1)' }}
                    priority
                />
            </div>
        </div>
    );
}