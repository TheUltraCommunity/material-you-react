# Components Documentation


## AppBars
### BottomAppBar

| Prop Name                         | Type      | Required  | Description                                                          |
|------------------------------------|-----------|-----------|----------------------------------------------------------------------|
| `backgroundColor`                  | `string`  | Optional        | Sets the background color of the app bar. Example: `'blue'`.          |
| `items`                            | `string[]`| Yes       | An array of icon names to display. Example: `['home', 'search']`.     |
| `floatingActionButton`             | `boolean` | Yes       | Displays the FAB when `true`. Example: `true`.                        |
| `floatingActionButtonBackgroundColor` | `string`  | Yes       | Background color of the FAB. Example: `'red'`.                        |
| `floatingActionButtonIcon`         | `string`  | Optional        | Icon for the FAB. Example: `'add'`.                                   |

### Usage

```jsx
<BottomAppBar
  backgroundColor="blue"
  items={['home', 'search']}
  floatingActionButton={true}
  floatingActionButtonBackgroundColor="red"
  floatingActionButtonIcon="add"
/>
```


***********************

# Follow this syntax to document the components you create. So that devs | end user can benefit from it. ♨️

## [ComponentName]

| Prop Name | Type     | Required  | Description                                                   |
|-----------|----------|-----------|---------------------------------------------------------------|
| `prop1`   | `type`   | Yes/Optional    | Description of `prop1`. Example: `example value`.              |
| `prop2`   | `type`   | Yes/Optional    | Description of `prop2`. Example: `example value`.              |
| `prop3`   | `type`   | Yes/Optional    | Description of `prop3`. Example: `example value`.              |

### Usage

<[ComponentName]
  prop1="value"
  prop2={value}
/>

***********************