import React, { SyntheticEvent, useCallback, useState } from 'react';
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import { ChakraTagsInput } from './chakra-tags-input';
const TestComponent = () => {
  const [tags, setTags] = useState<string[]>(['test1', 'test2']);
  const handleTagsChange = () => useCallback((event: SyntheticEvent, tags: string[]) => {
		console.log(event)
    setTags(tags)
  }, [])
  return (
    <div>
      <ChakraProvider>
        <Container py={8}>
          <Heading mb={8}>Chakra UI Tags Input Test</Heading>
          <ChakraTagsInput tags={tags} onTagsChange={handleTagsChange} />
        </Container>
      </ChakraProvider>
    </div>
  );
};
export default TestComponent;
