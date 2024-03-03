'use client'
import { Button } from "@/components/ui/Button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import Chart from "chart.js/auto";
import { useState } from "react"
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import useChart from "@/hooks/use-chart"

Chart.register(CategoryScale);

const PieChart = () => {
  const { graphData, isPending, error } = useChart()
  const labels = graphData?.map((data) => data.category)
  const data = graphData?.map((data) => data.productCount)
  const chartData = ({
    labels: labels,
    datasets: [
      {
        label: "Users per category ",
        data: data,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#2196F3",
           "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A",
            "#CDB32B", "#FFEB3B", "#FF9800", "#FF5722", "#795548", 
            "#9E9E9E"

        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[200px]" variant="outline">Click for pie-chart</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Piechart is here</DialogTitle>
          <DialogDescription>
            The product distribution by product categories
          </DialogDescription>
        </DialogHeader>
        {isPending && <p>Loading..</p>}
        {graphData && <PieComp chartData={chartData} />}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


const PieComp = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Product distributed among categories"
            }
          }
        }}
      />
    </div>
  );
}


export default PieChart