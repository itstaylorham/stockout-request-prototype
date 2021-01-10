Collecting Consumer Data on Stockout Requests

Jeremy Barton

**Business Understanding**

**BUSINESS NEED**

In the event of a stockout, it can be difficult to predict demand for a particular item. This affects a retailer&#39;s ability to find the stockout probability for the next period. Especially during the remainder of an item&#39;s selling season, consumer-reported, location-specific stockout data is not currently used as a predictor of continuing demand. A system that collects consumer data about inquiries of stockout items would allow analysts can create a more accurate demand forecast. It is for this reason that consumer-reported data can be a strong predictor of continuing demand for sold-out products. At store level, it would allow managers to better predict reorder quantities. This information is currently disregardedby retailers but can be easily collected through workers&#39; interactions on the sales floor.

Request data on an out-of-stock item would be sent to a database from the inventory devices that workers are required to wear. Once the stockout response data is stored, analysts use methods to predict demand during the next selling period after which more data is collected. Store managers could benefit from this data to determine re-ordering quantities of a product or redistribution from another location. With a more comprehensive forecast, retailers can better prepare for stock-in and maximize output.

**REQUIREMENTS**

For a process like this to function smoothly, there are three necessary factors that must be in play. First, the technology must be developed to execute the action of logging consumer-reported stockout data to the system. Within inventory devices, there is as an application that is used to keep track of stock in the store. A stockout request feature would be added to this application to achieve the goal of collecting request data on out-of-stock items.

Second, the normal course of handling a stockout request needs to be updated from within the stores. The change in process would be announced by management during a meeting and implemented as soon as the software on the inventory devices is updated with the new feature.

Lastly, at store level, it needs to be ensured that the stockout data is being captured by the employees. If there are missed stockout requests, the data will less accurate.

**Data Understanding**

**PROCESS &amp; DATA FLOW**

When a consumer is inquiring for a stockout item, the normal process is one in which the employee informs the consumer of the stockout, then offers alternative ways of purchasing the item. Stockout request data would be collected by adding an extra step to the process where the employee logs the request to a database via their inventory devices. Employees, especially those who spend most of their time stocking items should be always wearing these devices. This process depends on the use of the technology used to track stock-in and stock-out.

This system can be implemented as a feature within the software of the device. Data fields for this record will consist of the item unique ID and a number representing the amount of demand it has received since stockout. It will also track the duration of how long a product has been out of stock and use those timestamps against that stockout data to avoid over-ordering which will warrant markdowns or sales of overstocks. The data is sent to a database and stored in the application to be used by store managers and analysts to predict re-orders and create demand forecasts.

A process like this could turn automated where once the employees log a stockout request, a notification is sent to the closest location with that item to be sent to the location with the stockout. However, this would require approval from the provider if there is high demand at the location providing the product to the receiving store.

**USES FOR CONSMER-REPORTED STOCKOUT DATA**

Collecting consumer-reported, location specific stockout data can help predict continuing demand at regional levels. Insight like this can be useful in situations where inventory at a location with surplus can be redistributed to one with stockouts for that product. This process would be done before other measures are taken to get rid of surplus such as discounting, liquidation, or donation.

The stockout data can also help more accurately determine re-ordering from manufacturers during the remainder of the item&#39;s current selling season. As an added benefit for the buyers of sold-out products, this data can improve the responsiveness of restock alerts which are opted into by consumers in online buying systems. With this feature, the surplus product that is re-stocked at another location will move quickly. It could even go as far as notifying the consumer when surplus is detected at one location and is being moved to their store for products with very high demand.

**Use Case Scenarios**

- **Describes the process of logging response data to the client application.**

| **Use Case Name:** Logging Response Data | **ID:** A1-00 | **Priority:** High |
| --- | --- | --- |
| **Actor:** Employee |
| **Description:** Feature enables employees to record consumer stockout requests |
| **Trigger:** Consumer inquiries about a stockout item |
| **Type:** External |
| **Preconditions:**
1. Consumer requests an item that is out-of-stock
2. Employee informs consumer of stockout status and offers alternative options.
3. Employee opens inventory application
 |
| **Normal Course:**
1. Log Stockout Data to Inventory Application

1. User accesses the product details page of stockout item
2. User selects &quot;Manage Inventory&quot;
3. Application displays inventory management controls including a button labeled &quot;Stockout Requests&quot;
4. User selects the &quot;Stockout Requests&quot; button and is presented with a form that has two fields:

1. Numeric unique identifier for the item (already filled in).
2. A number representing the amount of consumer inquires for the item since time of stockout.

1. User selects &quot;Add Request [+]&quot; button at the bottom of the form.
2. Application confirms the user has added a new request
 |
| **Alternative Courses:** 1.5 1. User selects &quot;Remove Request&quot; button at the bottom of the form 2. Application confirms the user has removed a request
 |
| **Post Conditions:**
1. Application increases or decreases the number of stockout requests for the item by 1
2. Data is sent from the client-side application to a database
 |

- **Describes the process of accessing/analyzing stockout request data at store level.**

| **Use Case Name:** Accessing/Analyzing stockout Request Data at Store Level | **ID:** A2-00 | **Priority:** High |
| --- | --- | --- |
| **Actor:** Store Manager |
| **Description:** Data is sent to agent application to be accessed by store manager |
| **Trigger:** Application receives new stockout request data |
| **Type:** Temporal |
| **Preconditions:**
1. Employee logs new stockout request
2. Client application increases count by 1
 |
| **Normal Course:** 1.0 Accessing and Analyzing Data
1. Request data is stored in a database and sent to the store application
2. User opens store inventory application via computer or device
3. User logs into administrator panel
4. Application prints (displays) built-in store-specific report of inventory for the period of time selected including stockout request data including how long inventory has been out of stock and balance of the selling season for that product
5. User uses this information to determine the amount of reorder needed for next delivery


 |
| **Post Conditions:**
1. Stock-in levels are adjusted for stockout items to meet demand more accurately
2. Demand is better satisfied, and number of units sold is maximized
 |

- **Describes the process of accessing/analyzing stockout request data at corporate level.**

| **Use Case Name:** Accessing/Analyzing stockout Request Data at Corporate Level | **ID:** A3-00 | **Priority:** High |
| --- | --- | --- |
| **Actor:** Analyst |
| **Description:** Data is sent to agent application to be accessed by analysts |
| **Trigger:** Application receives new stockout request data |
| **Type:** Temporal |
| **Preconditions:**
1. Employee logs new stockout request
2. Client application increases count by 1
 |
| **Normal Course:**
1. Accessing and Analyzing Data
 1. Request data is stored in a database and sent to the agent application 2. User uses SQL commands or interface to access raw data to write a demand forecast for specific regions 3. Query is sent to database that includes demand for in-stock items as well as number of stockout requests of others4. Application returns results 5. User compares data to past results and prepares a stockout demand forecast based on findings
 |
| **Post Conditions:** 1. Regional managers use stockout report from demand forecast to get a more accurate overview of the performance of stores at different locations2. Adjustments are made to supply chain based on regional inventory needs |

**Stockout Request HTML Prototype**

Follows Use Case Scenario A1-00

[Crtl + Click here to visit prototype](http://bartontech.cloud/apps/stockout-request)

 Fig. 1: Product Details Screen

 ![](RackMultipart20210110-4-191le3x_html_766f654ef461e91.png)

Main screen of product page where the user selects **&quot;Manage Inventory&quot;**

Fig. 2: Manage Inventory Screen

![](RackMultipart20210110-4-191le3x_html_cd36dd00f18a080e.png)

Manage Inventory screen where user selects **&quot;Stockout Requests&quot;**

Fig. 3: Stockout Requests screen

![](RackMultipart20210110-4-191le3x_html_52ec58a4bbfac689.png)

Stockout Requests Screen where user has the option to add or remove stockout requests

Fig 4: Adding a Request

![](RackMultipart20210110-4-191le3x_html_bf9128532a617d7c.png)

After user selects **&quot;Add New Request [+]&quot;**

Fig. 5: Removing a Request

![](RackMultipart20210110-4-191le3x_html_b5fa65bc2dea1d0d.png)

After the user removes a stockout request.

Fig. 6: Exception for stockout count below zero

![](RackMultipart20210110-4-191le3x_html_28ecd074a017cbd2.png)

After user selects **&quot;Remove Request&quot;** while request count is currently zero.
