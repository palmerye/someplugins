export default function(router) {
	router.map({
		'/hello': {
	      component(resolve) {
	        require(['./components/Hello'], resolve)
	      }
	    },
	    '/': {
	      component(resolve) {
	        require(['./views/index'], resolve)
	      }
	    },
        '/dial': {
	      component(resolve) {
	        require(['./views/dial/index'], resolve)
	      }
	    },
		'/scratchCard': {
	      component(resolve) {
	        require(['./views/scratchCard/index'], resolve)
	      }
	    },
	    '/redpacket': {
	      component(resolve) {
	        require(['./views/redPacket/index'], resolve)
	      }
	    },
		'/countdown': {
	      component(resolve) {
	        require(['./views/countDown/index'], resolve)
	      },
	      subRoutes: {
	      	'/': {
		    	component(resolve) {
		    		require(['./views/countDown/time'], resolve)
		    	}
	      	},
	      	'/click': {
		    	component(resolve) {
		    		require(['./views/countDown/click'], resolve)
		    	}
	      	},
	      	'/result': {
		    	component(resolve) {
		    		require(['./views/countDown/result'], resolve)
		    	}
	      	}	      
	      }
	    }	
	})

	// router.beforeEach(({ to, from, next }) => {
 //        let toPath = to.path;
 //        var separates = toPath.split('/');
 //        router.app.$broadcast('on-topItem-selected', '/' + separates[1])
 //        next()
 //    })
}
