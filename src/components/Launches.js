import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLaunches } from '../redux/Launches/Launch';
import Launch from './Launch';

function Launches() {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const fruits = useSelector((state) => state.launch)

    useEffect(() => {
        dispatch(getLaunches())
    }, [])

    return (
        <div>
            <div className='input-div'>
        <input type='text' placeholder='Search. . .' onChange={event => setQuery(event.target.value)} />
        </div>
        <div className='fruits-div'>
            {
                fruits.filter(launch => {
                    if (query === '') {
                        return launch;
                    } else if (launch.name.toLowerCase().includes(query.toLowerCase())) {
                        return launch;
                    }
                }).map((launch, index) => (
                    <div className="box" key={index}>
                        <Launch
                            key={launch.id}
                            name={launch.name}
                            id={launch.id}
                            year={launch.year}
                            image = {launch.image}

                        />
                    </div>
                ))}
        </div>
        </div>
                )}

export default Launches