import { View, Button, Text } from "@tarojs/components";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useStore } from "@/store/hook";
import "./index.scss";

interface IndexProps {
}

function Index(props: IndexProps) {
  const { counter } = useStore();
  useEffect(() => {
    console.log(counter.counter);
  }, [counter.counter]);
  return (
    <View className='index'>
      <Button onClick={counter.increment}>+</Button>
      <Button onClick={counter.decrement}>-</Button>
      <Button onClick={counter.incrementAsync}>Add Async</Button>
      <Text>{counter.counter}</Text>
    </View>
  );
}

export default observer(Index);
