

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
          var PREBID_TIMEOUT = 700;

          var adUnits = [{
              code: 'div-gpt-ad-1',
              sizes: [[300, 250]],
              bids: [{
                  bidder: 'audienceNetwork',
                  params: {
                     placementId: '118220978561571_346529649064035',
                     fullwidth: true
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
            googletag.cmd.push(function() {
                googletag.pubads().disableInitialLoad();
            });

            pbjs.bidderSettings = {
                    standard: {
                        adserverTargeting: [
                             {
                         key: "fb_bidid",
                        val: function (bidResponse) {
                            console.log('Bid Response Bid ID: ' + bidResponse.fbBidId);
                            return bidResponse.fbBidId;
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
                        console.log("Key Values Appended");
                        googletag.pubads().refresh();
                    });
                });
            }

            setTimeout(function() {
                sendAdserverRequest();
            }, PREBID_TIMEOUT);


          </script>

          <script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>

          <script>
              googletag.cmd.push(function() {
                googletag.defineSlot('/27721068/header_bidding', [300, 250], 'div-gpt-ad-1').addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
              });
            </script>

    </head>
    <body>
      <p>Fullwidth - Prebid.js v24.1</p>
      <div id='div-gpt-ad-1' style='height:250px; width:300px;'>
        <script>
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1'); });
        </script>
      </div>

    </body>


</html>
