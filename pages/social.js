import Pages from './components/Pages';
import Card from './components/Card';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default function Home() {
  return (
    <Pages className="p-8 w-full">
      <div className="bg-white flex justify-end">
        <Button variant="contained" color="primary">
          <AddIcon />
        </Button>
      </div>
      <div className="flex justify-between mt-8">
        <Card title="Membuat Mesin Learning" />
        <Card />
        <Card />
      </div>
    </Pages>
  )
}
