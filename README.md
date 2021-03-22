The Github is set up to automatically push changes to the live website.  
http://rmg-artists.com
  
---

[https://github.com/CDeLeon94/RenardMusicGroup](https://github.com/CDeLeon94/RenardMusicGroup)

- The Github is set up to automatically push changes to the live website.
    - [https://github.com/CDeLeon94/RenardMusicGroup/actions](https://github.com/CDeLeon94/RenardMusicGroup/actions)
    - Top item is related to latest change
        - Green Check: Everything is good and website has been updated
        - Yellow Circle: Update process is underway
        - Red X: Update failed, nothing has changed on the public website
            - Click for more details (Build/Deployment Logs)
- Files in the Repository:
    - public/
        - index.html
            - 'content' holds the description that will be seen in search results
            - '<title>'' the title for search results and shown on the browser tab
    - src/components/
        - GroupPages/
            - Content/<groupName>/
                - `Header.js`
                    - The code for the top section of the group page
                - `Showtimes.js`
                    - data and format for displaying showtimes for the groups
                    - add entries by adding after line 24
                        - `createData(venue,data,city,ticketprice),`
                - `directory.js`
                    - Information about group members that can be used
                - `gallery.js`
                    - uses the directory.js info to display a gallery of photos without any biographical information
                - `memberinfo.js`
                    - uses the directory.js info to display a listing of photos and bios within the group pages
            - Files
                - `BohemianQuartet.js`
                    - Content of the BohemianQuartet page
                - `Viatorum.js`
                    - Content of the Viatorum Page
                - `merchandise.js`
                    - Content of the actual Merch page
        - Files
            - `App.js`
                - Route Definitions #Subpages need to be listed here for any links to work
            - `Header.js`
                - Top bar that is on all pages
            - `Footer.js`
                - Bottom bar that is on all pages
            - `MainPage.js`
                - The central content on the homepage
                - Uses templates for each group
            - `Merch.js`
                - The template for the Merch box on the home page
