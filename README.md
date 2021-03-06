#FESD Week 6 WAR with Unit Test

# Topic 6 notes

* Chrome Dev Tools
    * Device toggle ("device mode")
        * "First-order approximation": not actually run in mobile 
            * Usually good enough...advanced option if you need to run in an actual device is to leverage remote debugging; see https://developers.google.com/web/tools/chrome-devtools/remote-debugging
        * Features:
            * Change orientation
            * Simulate specific devices (resolutions, user agent strings)
            * Throttling network and CPU, simulating offline
                * Note: can have more granular control over throttling for network and CPU in "Network" and "Performance" panels, respectively
            * Media queries breakpoints
    * Tabs ("panels")
        * Essentials (covered in videos, required to know)
            * Elements: DOM inspection
            * Console: Viewing logs and using the REPL (read-eval-print loop)
                * Log levels
                * Live expressions
            * Sources: what's currently loaded in the browser
            * Network tab: view network requests
                * Demo page: http://devtools.glitch.me/network/getstarted.html
            * Application: examine storage
        * Other panels: FYI
            * Performance: profile runtime performance (as opposed to loading)
            * Memory: inspect memory usage
            * Security: inspect certificates, potential issues
            * Lighthouse: automatic audits on web page quality (see https://developers.google.com/web/tools/lighthouse)
    * Additional features worth highlighting
        * Command Menu, akin to "Command Palette" in VS Code and for similar purposes, with same hotkeys: Ctrl+Shift+P (Command+Shift+P on Mac)
    * References
        * Official docs: https://developers.google.com/web/tools/chrome-devtools
* Debugging
    * Adding breakpoints, working with breakpoints (e.g. stepping over, stepping into functions, etc.)
    * Watch, Scope, etc.
* Unit Tests: 
    * Concept
        * test individual code units in isolation; compare with other testing that concerns other scopes (e.g. component, integration, end-to-end ("e2e") testing)
    * Concrete practice
        * Mocha and Chai
            * Mocha: test framework
            * Chai: assertion library that provides assertion styles such as BDD
                * "expect" style also known as BDD ("behavior-driven development") style https://www.chaijs.com/guide/styles/#expect
                * idea with BDD-style testing is to express *human-readable descriptions of requirements (expected behavior)* as functional tests
        * Installing Node (LTS)
        * `npm init`, `npm init -y` to skip questionnaire
        * `npm install mocha`, `npm install chai`
        * Writing basic unit tests; `describe`; `it`; `expect`
            * `expect(...).to.equal(...)`
            * `expect(...).to.throw(...)`
        * Basic skeleton for running tests in the browser
* Test-Driven Development (TDD): requirements--->tests--->code. Idea is to write the tests first, then the code to make the tests pass. This keeps the focus on functional software that clearly meets objective requirements.


project
unit testing
