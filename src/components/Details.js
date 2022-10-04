import React from 'react';
import { useSelector } from 'react-redux';
import LaunchDetail from './Detail';

function Details() {
    let launches = useSelector((state) => state.launch)
    launches =launches.filter(launch => launch.toggle)
    return (
        <div>
            {launches.map((launch)=> (
                <LaunchDetail 
                key={launch.id}
                name={launch.name}
                id={launch.id}
                year={launch.year}
                upcoming={launch.upcoming}
                rocket_name = {launch.rocket_name}
                launch_success = {launch.launch_success}
                rocket_type = {launch.rocket_type}
                launch_site = {launch.launch_site}
                launch_date = {launch.launch_date}
                image = {launch.image}
                    />
            ))}
        </div>
    )
}

export default Details