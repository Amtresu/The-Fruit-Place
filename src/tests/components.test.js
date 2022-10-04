/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Header from '../components/Header';
import Details from '../components/Details';
import Launch from '../components/Launch';
import Launches from '../components/Launches';


describe('Render All Components', () => {
    test('render Header', () => {

        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(`
        <div className="header-div">
            <header>
                <div className="header-nav">
                    <div>
                        <img src={arrow} alt='back-arrow' className="arrow icon" />
                    </div>
                    <div>
                        <img src={mic} alt="mic" className="mic icon" />
                        <img src={settings} alt="settings icon" className="settings" />
                    </div>
                </div>
                <div className="logo-div">
                    <img src={logo} alt="logo"className="logo"/>
                    <h1>The Launch Place</h1>
                </div>
            </header>
            <div className="">
                <Launches />
            </div>
        </div>`);
    });
    test('render Launches', () => {

        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Launches />
                </Provider>
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(`
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
                )
)`
        );
    });
    test('render Launch', () => {

        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Launch />
                </Provider>
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(`
    <div key={id} className="mission-div">
    <Link
       id={id}
       type="button"
       onClick={showDetails1}
       to="./Details"
   ><img src={arrow} alt='back-arrow' className="home-arrow icon" /> </Link>
   <img src={image} alt='mission patch' className="mission-img"></img>
   <ul className="mission-list">
   <li>{name}</li>
   <li>{year}</li>
   </ul>
</div>`
        );
    });
    test('render detail', () => {

        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Details />
                </Provider>
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(`
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
        </div>`
        );
    });
})