import React, {useState} from 'react';
import Header from './header/header';
import Sticky from 'react-stickynode';
import Footer from './footer/footer';

export default function HomeLayout({children}) {
    const [isSticky, setIsSticky] = useState(false);

    const handleStateChange = (statusbar) => {

        if(statusbar === Sticky.STATUS_FIXED){
            setIsSticky(true)
        }
        else if (statusbar === Sticky.STATUS_ORIGINAL){
            setIsSticky(false)
        }
    }
    return(
        <React.Fragment>
            <Sticky onStateChange={handleStateChange}>
                <Header stateofbeing={`${isSticky ? 'sticky' : 'unSticky'}`}/>
            </Sticky>
            <main sx={{variant: 'layout.main'}}>
                {children}
            </main>
            <Footer></Footer>
        </React.Fragment>
    )
}