import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Page', () => {

  test("Test Case 1 - App Should have all the buttons",() => {
    render(<App/>)
      
      const button1 = screen.queryByTestId("button-1");
      expect(button1).toBeInTheDocument();
  
      const button2 = screen.queryByTestId("button-2");
      expect(button2).toBeInTheDocument();
  
      const button3 = screen.queryByTestId("button-3");
      expect(button3).toBeInTheDocument();
  
      const button4 = screen.queryByTestId("button-4");
      expect(button4).toBeInTheDocument();
  
      const button5 = screen.queryByTestId("button-5");
      expect(button5).toBeInTheDocument();
  
      const button6 = screen.queryByTestId("button-6");
      expect(button6).toBeInTheDocument();
  
      const button7 = screen.queryByTestId("button-7");
      expect(button7).toBeInTheDocument();
  
      const button8 = screen.queryByTestId("button-8");
      expect(button8).toBeInTheDocument();
  
      const button9 = screen.queryByTestId("button-9");
      expect(button9).toBeInTheDocument();
    });  

    test("Test Case 2 - All buttons should be enabled initially",() => {
      render(<App/>)
        
        const button1 = screen.queryByTestId("button-1");
        expect(button1).not.toBeDisabled();
    
        const button2 = screen.queryByTestId("button-2");
        expect(button2).not.toBeDisabled();
    
        const button3 = screen.queryByTestId("button-3");
        expect(button3).not.toBeDisabled();
    
        const button4 = screen.queryByTestId("button-4");
        expect(button4).not.toBeDisabled();
    
        const button5 = screen.queryByTestId("button-5");
        expect(button5).not.toBeDisabled();
    
        const button6 = screen.queryByTestId("button-6");
        expect(button6).not.toBeDisabled();
    
        const button7 = screen.queryByTestId("button-7");
        expect(button7).not.toBeDisabled();
    
        const button8 = screen.queryByTestId("button-8");
        expect(button8).not.toBeDisabled();
    
        const button9 = screen.queryByTestId("button-9");
        expect(button9).not.toBeDisabled();
      });
      test('Test Case 3 - Intially start button is present',() => {
        render(<App/>)
        const start = screen.queryByTestId('start')
        expect(start).toBeVisible()
      })

      test('Test Case 4 - Cross Should be winner', () => {
        render(<App />);
        
        const winner = screen.queryByTestId("winner");
    
        const button1 = screen.queryByTestId("button-1");
        const button2 = screen.queryByTestId("button-2");
        const button3 = screen.queryByTestId("button-3");
        const button4 = screen.queryByTestId("button-4");
        const button5 = screen.queryByTestId("button-5");
    
        fireEvent.click(button3);
        fireEvent.click(button5);
        fireEvent.click(button2);
        fireEvent.click(button4);
        fireEvent.click(button1);
    
        expect(winner).toHaveTextContent("Cross Is Winner");
    
        const start = screen.queryByTestId("start")
        expect(start).toBeInTheDocument()
      });

      test('Test Case 5 - Cross Should be winner Diagonal Case', () => {
        render(<App />);
        
        const winner = screen.queryByTestId("winner");
    
        const button1 = screen.queryByTestId("button-1");
        const button2 = screen.queryByTestId("button-2");
        const button3 = screen.queryByTestId("button-3");
        const button4 = screen.queryByTestId("button-4");
        const button5 = screen.queryByTestId("button-5");
        const button6 = screen.queryByTestId("button-6");
        const button7 = screen.queryByTestId("button-7");
    
        fireEvent.click(button1);
        fireEvent.click(button2);
        fireEvent.click(button3);
        fireEvent.click(button4);
        fireEvent.click(button5);
        fireEvent.click(button6);
        fireEvent.click(button7);
    
        expect(winner).toHaveTextContent("Cross Is Winner");
    
        const start = screen.queryByTestId("start")
        expect(start).toBeInTheDocument()
      });

      test('Test Case 6 - Circle Should be winner', () => {
        render(<App />);
        
        const winner = screen.queryByTestId("winner");
    
        const button1 = screen.queryByTestId("button-1");
        const button2 = screen.queryByTestId("button-2");
        const button3 = screen.queryByTestId("button-3");
        const button5 = screen.queryByTestId("button-5");
        const button6 = screen.queryByTestId("button-6");
        const button8 = screen.queryByTestId("button-8");
    
        fireEvent.click(button1);
        fireEvent.click(button2);
        fireEvent.click(button3);
        fireEvent.click(button5);
        fireEvent.click(button6);
        fireEvent.click(button8);
    
        expect(winner).toHaveTextContent("Circle Is Winner");
    
        const start = screen.queryByTestId("start")
        expect(start).toBeInTheDocument()
      });

      test('Test Case 7 - Draw the game', () => {
        render(<App />);
        
        const winner = screen.queryByTestId("winner");
    
        const button1 = screen.queryByTestId("button-1");
        const button2 = screen.queryByTestId("button-2");
        const button3 = screen.queryByTestId("button-3");
        const button4 = screen.queryByTestId("button-4");
        const button5 = screen.queryByTestId("button-5");
        const button6 = screen.queryByTestId("button-6");
        const button7 = screen.queryByTestId("button-7");
        const button8 = screen.queryByTestId("button-8");
        const button9 = screen.queryByTestId("button-9");

    
        fireEvent.click(button1);
        fireEvent.click(button2);
        fireEvent.click(button3);
        fireEvent.click(button4);
        fireEvent.click(button6);
        fireEvent.click(button5);
        fireEvent.click(button7);
        fireEvent.click(button9);
        fireEvent.click(button8);
       
    
        expect(winner).toHaveTextContent("Draw");
    
        const start = screen.queryByTestId("start")
        expect(start).toBeInTheDocument()
      });


})

