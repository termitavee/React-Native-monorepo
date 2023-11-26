import { OptionValues } from 'commander';
import { Text } from 'ink';
import React, { FC } from 'react';

interface AppProps {
  options: OptionValues;
}

const App: FC<AppProps> = ({ options }) => {
  return (
    <Text>
      Hello, <Text color="green">{options['name']}</Text>
    </Text>
  );
};

export default App;
