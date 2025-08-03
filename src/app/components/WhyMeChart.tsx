"use client";
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function WhyMeChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['অভিজ্ঞতা', 'ত্যাগ', 'সততা', 'যোগাযোগ'],
        datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: ['#059669', '#10B981', '#34D399', '#6EE7B7'],
          borderColor: '#FDFBF5',
          borderWidth: 4
        }]
      },
      options: {
        responsive: true,
        cutout: '60%',
        plugins: {
          legend: { position: 'bottom', labels: { color: '#4B5563', font: { size: 14 } } }
        }
      }
    })
  }, [])

  return <canvas ref={canvasRef} className="w-full h-64 md:h-96" />
}
