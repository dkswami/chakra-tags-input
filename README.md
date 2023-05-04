# Chakra Tags Input Guide

Congrats! You just saved yourself hours of work by using this package for tags input field.
That renders respective tags and and provides an easy interface for removing and adding new tags

## Commands

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm i chakra-tags-input
yarn add chakra-tags-input
```

## Usage

Here is a simple working react Functional Component for this package :

```bash
import { ChakraTagsInput } from "chakra-tags-input";

const TestComponent = () => {
	const [tags, setTags] = useState<string[]>(['test1', 'test2']);

	const handleTagsChange = (event: SyntheticEvent, tags: string[]) => {
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