# Chakra Tags Input Guide

Congrats! You just saved yourself hours of work by using this package for tags input field.
That renders respective tags and and provides an easy interface for removing and adding new tags

## Commands

To install follow these commands :

```bash
npm i chakra-tags-input
yarn add chakra-tags-input
```

## Usage

Here is a simple working react Functional Component for this package :

```jsx
import { SyntheticEvent } from 'react';
import { ChakraTagsInput } from "chakra-tags-input";

const TestComponent = () => {
	const [tags, setTags] = useState<string[]>(['test1', 'test2']);

	const handleTagsChange = (event: SyntheticEvent, tags: string[]) =>{
    setTags(tags)
  };
	return(
		<ChakraTagsInput
            tags={tags}
            onTagsChange={handleTagsChange}
          />
	)
}
```

## Demo with all options applied

### [Check it out in this Sandbox](https://codesandbox.io/s/chakra-tags-input-p8bhuz?file=/src/App.tsx)

<br />


