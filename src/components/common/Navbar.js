import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import QuestionIcon from '@material-ui/icons/QuestionAnswer'
import MoreIcon from '@material-ui/icons/MoreVert'
import { StyledLink } from './StyledLink'
import { withRouter } from 'react-router-dom'
const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  iconText: {
    marginRight: 10
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  titleMobile: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  linkColor: {
    color: '#FFF'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
})

class AppNavBar extends React.Component {
  state = {
    mobileMoreAnchorEl: null
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }

  openLink(route) {
    this.props.history.push(route)
    this.handleMobileMenuClose()
  }

  render() {
    const { mobileMoreAnchorEl } = this.state
    const { classes } = this.props
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.openLink.bind(this, '/')}>
          <IconButton color='inherit'>
            <HomeIcon />
          </IconButton>
          <p className={classes.iconText}>
            {/* <StyledLink color='rgba(0, 0, 0, 0.87)' to='/'> */}
            Home
            {/* </StyledLink> */}
          </p>
        </MenuItem>
        <MenuItem onClick={this.openLink.bind(this, '/faqs')}>
          <IconButton color='inherit'>
            <QuestionIcon />
          </IconButton>
          <p className={classes.iconText}>
            {/* <StyledLink color='rgba(0, 0, 0, 0.87)' to='/faqs'> */}
            FAQs
            {/* </StyledLink> */}
          </p>
        </MenuItem>
      </Menu>
    )

    return (
      <div className={classes.root}>
        <AppBar position='absolute'>
          <Toolbar>
            <Typography
              className={classes.title}
              variant='title'
              color='inherit'
              noWrap
            >
              Qantas Cars
            </Typography>
            <Typography
              className={classes.titleMobile}
              variant='title'
              color='inherit'
              noWrap
            >
              Q
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <MenuItem className={classes.linkColor}>
                <StyledLink to='/'>Home</StyledLink>
              </MenuItem>
              <MenuItem className={classes.linkColor}>
                <StyledLink to='/faqs'>FAQs</StyledLink>
              </MenuItem>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup='true'
                onClick={this.handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    )
  }
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(AppNavBar))
