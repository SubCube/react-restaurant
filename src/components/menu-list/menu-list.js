import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux'
import WithRestoService from '../hoc'
import { menuLoaded, menuRequested, menuError } from '../../actions'
import Spinner from '../spinner'
import Error from '../error'

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        const { RestoService, menuRequested, menuLoaded } = this.props;

        menuRequested();

        RestoService.getMenuItems()
            .then(res => menuLoaded(res)).catch(error=>menuError())

    }

    render() {

        const { menuItems, loading, error } = this.props
        if (loading) {
            return <Spinner/>
        }
         if (error) {
            return <Error/>
        }

        const items =    menuItems.map(item => {
                return <MenuListItem menuItem={item} key={ item.id }/>
        })

        return (
            <View items={ items }/>
        )
    }




};

const View = ({items}) => {

    return (
        <ul className="menu__list">
            {items}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList));
