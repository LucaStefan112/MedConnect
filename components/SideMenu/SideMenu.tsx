/*
    Component: Side Menu
    Author: Tudor
    Type: Structure
*/

import styles from './SideMenu.module.css';


export default function SideMenu ()
{
    return (

        <div className = {styles.side_menu}>

            <ul className = {styles.unordered_list}>

                <li className = {styles.list_item}>
                    <a href = "#">Home</a>
                </li>

                <li className = {styles.list_item}>
                    <a href = "#">New Appointment</a>
                </li>

                <li className = {styles.list_item}>
                    <a href = "#">Appointments</a>
                </li>

                <li className = {styles.list_item}>
                    <a href = "#">Analyses</a>
                </li>

                <li className = {styles.list_item}>
                    <a href = "#">Settings</a>
                </li>

            </ul>

        </div>

    )
}