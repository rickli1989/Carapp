import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
const styles = theme => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    marginTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: 56,
      height: 'calc(100vh - 56px)'
    }
  },
  main: {
    height: '100%',
    justifyContent: 'flex-start',
    overflow: 'auto',
    flexBasis: '80%',
    padding: 20,
    [theme.breakpoints.down('md')]: {
      flexBasis: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '60%'
    }
  },
  side: {
    height: '100%',
    overflow: 'auto',
    flexBasis: '20%',
    [theme.breakpoints.down('md')]: {
      flexBasis: '30%'
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '40%'
    }
  },
  listItem: {
    margin: '10px 0',
    backgroundColor: '#FFFFFF !important'
  },
  paragraph: {
    fontSize: 20
  },
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    right: 0,
    bottom: 0
  }
})
class FAQPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      content: null
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.faqQuery !== this.props.faqQuery) {
      this.setState({ content: nextProps.faqQuery.faqs })
    }
  }

  componentDidCatch(error, info) {
    console.log(info.componentStack)
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index })
  }

  render() {
    const { classes } = this.props
    if (this.props.faqQuery.loading) {
      return (
        <div className={classes.root}>
          <CircularProgress size={100} />
        </div>
      )
    }
    return (
      <div className={classes.root}>
        <Paper className={classes.main}>
					<div
            dangerouslySetInnerHTML={{
              __html:
                this.state.content == null
                  ? null
                  : this.state.content[this.state.selectedIndex].title
            }}
          />
					<hr />
          <div
            className={classes.paragraph}
            dangerouslySetInnerHTML={{
              __html:
                this.state.content == null
                  ? null
                  : this.state.content[this.state.selectedIndex].body
            }}
          />
        </Paper>
        <Paper className={classes.side}>
          <List>
            {this.props.faqQuery.faqs.map((data, index) => (
              <div key={data.id}>
                <ListItem
                  button
                  className={classes.listItem}
                  selected={this.state.selectedIndex === 0}
                  onClick={event => this.handleListItemClick(event, index)}
                >
                  <ListItemText primary={data.title} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Paper>
      </div>
    )
  }
}

export const FAQ_QUERY = gql`
  query faqQuery {
    faqs(orderBy: createdAt_DESC) {
      id
      title
      body
    }
  }
`

const FAQWithQuery = graphql(FAQ_QUERY, {
  name: 'faqQuery',
  options: {
    fetchPolicy: 'network-only'
  }
})(FAQPage)

export default withStyles(styles)(FAQWithQuery)
