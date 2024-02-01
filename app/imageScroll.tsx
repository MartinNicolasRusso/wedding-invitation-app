import { useEffect, useState } from 'react';

const ImageScroll: React.FC = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            
            if (currentScrollPos > prevScrollPos) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className='flex flex-row gap-5' id='imageContainer'>
            <img src='images/LULAYPAU-G13.jpg' className={`w-[288px]`} /> 
            <img src='images/LULAYPAU-G14.jpg' className={`image w-[288px] ${scrollDirection === 'down' ? 'translate-y-16' : '-translate-y-48'}  duration-1000`} /> 
            <img src='images/LULAYPAU-G15.jpg' className={`w-[288px]`} /> 
            <img src='images/LULAYPAU-G11.jpg' className={`image w-[288px] ${scrollDirection === 'up' ? 'translate-y-48' : '-translate-y-16'} duration-1000`} /> 
            <img src='images/LULAYPAU-G12.jpg' className={`w-[288px]`} /> 
            <img src='images/LULAYPAU-G17.jpg' className={`image w-[288px] ${scrollDirection === 'down' ? 'translate-y-5' : '-translate-y-36'} duration-1000`} /> 
        </div>
    );
};

export default ImageScroll;