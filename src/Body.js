import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import SongRow from './SongRow';
import { Favorite, PlayCircleFilled, MoreHoriz } from '@material-ui/icons';



function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className='body'>
            <Header spotify={spotify}/>
            <div className='body__info'>
                <img 
                    src={discover_weekly?.images[0].url}
                    alt='' 
                />
                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilled className='body__shuffle'/>
                    <Favorite className="body__favorite" fontSize='large'/>
                    <MoreHoriz className='body__more' />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;