<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="author" content="John F. Black">
        <meta name="description" content="Test Site for John F. Black">
        <meta name="keywords" content="John, John Black, John F Black, John F. Black, John Francis Black, Test Site, Test, Synacor, Facebook, NBC, NBCUniversal, LocalEdge, Buffalo, New York, New York City, NYC, Grand Island, University at Buffalo, UB, Technical Support, Ad Operations, AdOps, AdTech">
        <title>UniverseJohn</title>
        <link rel="stylesheet" href="style.css">

      <script>
          var PREBID_TIMEOUT = 2000;

          var adUnits = [{
              code: 'div-gpt-ad-1',
              sizes: [[300, 250]],
              bids: [{
                  bidder: 'audienceNetwork',
                  params: {
                     placementId: '118220978561571_429341210782878'
                  }
              }]
          },{
              code: 'div-gpt-ad-2',
              sizes: [[300, 250]],
              bids: [{
                  bidder: 'audienceNetwork',
                  params: {
                     placementId: '118220978561571_429341297449536'
                  }
              }]
          },{
              code: 'div-gpt-ad-3',
              sizes: [[300, 250]],
              bids: [{
                  bidder: 'audienceNetwork',
                  params: {
                     placementId: '118220978561571_429341410782858'
                  }
              }]
          }];

          var pbjs = pbjs || {};
          pbjs.que = pbjs.que || [];

        </script>

        <script type="text/javascript" src="prebid.js" async></script>
        <script>
          var googletag = googletag || {};
          googletag.cmd = googletag.cmd || [];

          pbjs.bidderSettings = {
                    standard: {
                        adserverTargeting: [
                             {
                         key: "fb_bidid",
                        val: function (bidResponse) {
                            console.log('Bid Response Bid ID: ' + bidResponse.bidid);
                            return bidResponse.bidid;
                         }
                            },
                            {
                                key: "hb_bidder",
                                val: function (bidResponse) {
                                    console.log('Bid Response Bidder Name: ' + bidResponse.bidderCode);
                                    return bidResponse.bidderCode;
                                }
                            }, {
                                key: "hb_adid",
                                val: function (bidResponse) {
                                    console.log('Bid Response Ad ID: ' + bidResponse.adId);
                                    return bidResponse.adId;
                                }
                            }, {
                                key: "hb_pb",
                                val: function (bidResponse) {
                                    console.log('Bid Response Bid Price: ' + bidResponse.pbMg);
                                    return '20.00';
                                }
                            }
                        ]
                    },

                };

          pbjs.que.push(function() {
              pbjs.addAdUnits(adUnits);
              pbjs.requestBids({
                  bidsBackHandler: sendAdserverRequest
              });
          });

          function sendAdserverRequest() {
              if (pbjs.adserverRequestSent) return;
              pbjs.adserverRequestSent = true;
              googletag.cmd.push(function() {
                  pbjs.que.push(function() {
                      pbjs.setTargetingForGPTAsync();
                  });
              });
          }

          setTimeout(function() {
              sendAdserverRequest();
          }, PREBID_TIMEOUT);

        </script>

        <script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>

        <script>
          var slot1, slot2, slot3; + googletag.cmd.push(function() {
            slot1 = googletag.defineSlot('/27721068/header_bidding', [300, 250], 'div-gpt-ad-1').addService(googletag.pubads());
            slot2 = googletag.defineSlot('/27721068/header_bidding', [300, 250], 'div-gpt-ad-2').addService(googletag.pubads());
            slot3 = googletag.defineSlot('/27721068/header_bidding', [300, 250], 'div-gpt-ad-3').addService(googletag.pubads());
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();
          });
        </script>

    </head>
    <body>
      <hr>
      <div class="details">
        <h4>- Prebid.js v25 -</h4>
        <h4>- Audience Network -</h4>
        <h4>- DFP Lazy Loading -</h4>
      </div>
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <hr>
      <div class="adSlot1" style='height:250px; width:300px;'>
        <div id='div-gpt-ad-1' style='height:250px; width:300px;'>
          <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1'); });
          </script>
        </div>
      </div>
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <hr>
      <div class="adSlot2" style='height:250px; width:300px;'>
        <div id='div-gpt-ad-2' style='height:250px; width:300px;'>
          <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-2'); });
          </script>
        </div>
      </div>
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <hr>
      <div class="adSlot3" style='height:250px; width:300px;'>
        <div id='div-gpt-ad-3' style='height:250px; width:300px;'>
          <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-3'); });
          </script>
        </div>
      </div>
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </body>
    <script>
      var refreshed1 = false;
      var refreshed2 = false;
      var refreshed3 = false;

      var listener1 = function() {
        if (window.scrollY >= div1H1 && !refreshed1) {
          googletag.cmd.push(function() {
            googletag.pubads().refresh([slot1]);
          });

          refreshed1 = true;

          window.removeEventListener('scroll', listener1);
          window.addEventListener('scroll', listener2);
        }
      }

      var listener2 = function() {
        if (window.scrollY >= div2H2 && !refreshed2) {
          googletag.cmd.push(function() {
            googletag.pubads().refresh([slot2]);
          });

          refreshed2 = true;

          window.removeEventListener('scroll', listener2);
          window.addEventListener('scroll', listener3);
        }
      }

      var listener3 = function() {
        if (window.scrollY >= div3H3 && !refreshed3) {
          googletag.cmd.push(function() {
            googletag.pubads().refresh([slot3]);
          });

          refreshed3 = true;

          window.removeEventListener('scroll', listener3);
        }
      }
      window.addEventListener('scroll', listener1);

      var div1 = document.querySelector(".adSlot1");
      var div1H = div1.offsetTop;
      var div1H1 = div1H - 300;

      var div2 = document.querySelector(".adSlot2");
      var div2H = div2.offsetTop;
      var div2H2 = div2H - 300;

      var div3 = document.querySelector(".adSlot3");
      var div3H = div3.offsetTop;
      var div3H3 = div3H - 300;
    </script>


</html>
