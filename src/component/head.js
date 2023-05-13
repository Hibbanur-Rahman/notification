import './head.css'
import Messeges from './messeges'
function Head()
{
    return(
        <div className="body">
            <div className='heading'>
                <h1>Notification</h1>
            </div>
            <div className="seen-notification">
                <div>
                    <p>All</p>
                </div>
                <div>
                    <p>Unread</p>
                </div>
            </div>
            <div className='see-all-navbar'>
                <div className='new'>
                    <p><b>New</b></p>
                </div>
                <div className='see-all'>
                    <p>See all</p>
                </div>
            </div>
            <Messeges></Messeges>
        </div>
    );
}


export default Head;