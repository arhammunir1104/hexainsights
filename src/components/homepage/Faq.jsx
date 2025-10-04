import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      id: 'panel1',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries, including financial institutions, medical companies, tech companies, and government organizations.'
    },
    {
      id: 'panel2',
      question: 'What is your pricing model?',
      answer: 'Our pricing model is flexible and depends on the specific needs of your project. We offer customized solutions to fit various budgets and project scopes.'
    },
    {
      id: 'panel3',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but we work efficiently to deliver solutions as quickly as possible without compromising quality.'
    },
    {
      id: 'panel4',
      question: 'How does the development process work?',
      answer: 'Our development process is agile and collaborative. We start with a discovery phase, followed by design, development, testing, and deployment, with continuous communication throughout.'
    },
  ];

  // Split data into two columns for the desktop view
  const column1Data = faqData.slice(0, 2);
  const column2Data = faqData.slice(2, 4);

  return (
    <section className="relative py-12 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          {/* <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold  text-[#070778] tracking-tight">
            Frequently Ask Questions
          </h2> */}
          <h3 className="text-3xl font-[Quicksand] md:text-4xl lg:text-5xl font-bold text-[#070778] tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h3>
        </div>

        {/* This div now acts as the container for the two independent columns */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-x-12 lg:gap-x-20 max-w-5xl mx-auto">
          {/* Column 1 */}
          <div className="flex-1 space-y-8">
            {column1Data.map((item) => (
              <div key={item.id} className={`rounded-xl shadow-xl transition-all duration-300 ${expanded === item.id ? 'border-l-4 border-[#070778]' : ''}`}>
                <Accordion
                  expanded={expanded === item.id}
                  onChange={handleChange(item.id)}
                  sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': { display: 'none' },
                    borderRadius: '12px',
                    p: 0
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-gray-500" />}
                    aria-controls={`${item.id}-content`}
                    id={`${item.id}-header`}
                    sx={{
                      p: '0 24px',
                      minHeight: '64px',
                      '& .MuiAccordionSummary-content': {
                        m: '24px 0',
                        '&.Mui-expanded': {
                          m: '24px 0',
                        },
                      },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(0deg)',
                      },
                    }}
                  >
                    <Typography className="text-base sm:text-lg font-medium text-gray-800">
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: '0 24px 24px' }}>
                    <Typography className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
          
          {/* Column 2 */}
          <div className="flex-1 space-y-8">
            {column2Data.map((item) => (
              <div key={item.id} className={`rounded-xl shadow-xl transition-all duration-300 ${expanded === item.id ? 'border-l-4 border-[#070778]' : ''}`}>
                <Accordion
                  expanded={expanded === item.id}
                  onChange={handleChange(item.id)}
                  sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': { display: 'none' },
                    borderRadius: '12px',
                    p: 0
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-gray-500" />}
                    aria-controls={`${item.id}-content`}
                    id={`${item.id}-header`}
                    sx={{
                      p: '0 24px',
                      minHeight: '64px',
                      '& .MuiAccordionSummary-content': {
                        m: '24px 0',
                        '&.Mui-expanded': {
                          m: '24px 0',
                        },
                      },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(0deg)',
                      },
                    }}
                  >
                    <Typography className="text-base font-[Quicksand] sm:text-lg font-medium text-gray-800">
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: '0 24px 24px' }}>
                    <Typography className="text-sm font-[Quicksand] sm:text-base text-gray-600 leading-relaxed">
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <NavLink to="/contact"> 
        <button className="px-8 font-[Quicksand] cursor-pointer py-4 bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white font-semibold rounded-[10px] shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Us →
          </button>
            </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Faq;
