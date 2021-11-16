# task 5

### Review
**Line**: comment

- **5**: replace var by let (for changeable values)
- **5**: typo (setFeul should be setFuel, right?)
- **5**: set the initial value as null - no data fetched/empty

- **6**: replace var by let (for changeable values)
- **6**: create a utils/lang file to store the messages that should be displayed and import it into the component (e.g. messages.PROCESSING) - implement on lines 18, 19 and 20

- **9 to 14**: move the respective request to a utils/request file to keep component clean

- **12**: typo (setFeul should be setFuel, right?)

- **13**: remove console.log

- **18**: add return statement to close the process
- **18**: remove else statement

- **19**: add return statement to close the process
- **19**: remove else statement
- **19**: should be 10,000 instead of 0

- **24**: replace div by fragment(<> content </>) if you dont need styling it

- **25**: create a state to manage this status instead comparing string (e.g. [alert, handleAlert]) - this state must be updated in the second useEffect validation
- **25**: create a method to hadle this style change