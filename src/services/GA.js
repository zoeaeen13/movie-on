import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize(
    [
      {
        trackingId: process.env.REACT_APP_GA3,
        gaOptions: {
          name: 'ga3',
        }
      },
      {
        trackingId: process.env.REACT_APP_GA4,
        gaOptions: {
          name: 'ga4'
        }
      }
    ],
    { debug: false, alwaysSendToDefaultTracker: false }
  )
	console.log('GA init')
}

export const logPageView = () => {
  const pathname = window.location.pathname
  console.log('logPageView', pathname)
  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
}

// category: 'User', 'Navigation', 'App Editing'
// action: 'Clicked Delete', 'Added a component', 'Deleted account'
// label:  'Added a component' action, we could add the name of a component as the label. E.g. 'Survey', 'Heading', 'Button', etc.
export const gaEvent = (category, action, param) => {
	console.log('gaEvent:', category, action)
	if (!category || !action) {
		return console.warn('category and action is required')
	}
	if (param) {
    const { value, label } = param
		ReactGA.event({ category, action, value, label })
	} else {
		ReactGA.event({ category, action })
	}
}

export const gaException = ({ description, isFatal }) => {
  ReactGA.exception({
    description,
    fatal: Boolean(isFatal)
  })
}
