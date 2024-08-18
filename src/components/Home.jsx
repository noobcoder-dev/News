// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, CardMedia, CircularProgress } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const mediaStyle = {
  height: 140,
  objectFit: 'cover',
};

const contentStyle = {
  flex: 1,
};

const Home = ({ category }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { query } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const placeholderImage = '../public/1.jpg'; // Update this path

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            category: category || '',
            country: 'in',
            q: query || '',
            apiKey: '9e5f664e20694465b2e8f4a70c4f9b53', // Replace with your API key
          },
        });
        setNews(response.data.articles);
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, query]);

  const handleCardClick = (article) => {
    navigate(`/article`, { state: { article } });
  };

  return (
    <Container>
      {loading && <CircularProgress />}
      {error && <Typography variant="h6" color="error">{error}</Typography>}
      <Grid container spacing={2} mt={2}>
        {news.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                ...cardStyle,
                backgroundColor: darkMode ? 'background.default' : 'background.paper',
                color: darkMode ? 'text.primary' : 'text.secondary',
              }}
              onClick={() => handleCardClick(article)}
            >
              <CardMedia
                component="img"
                height="140"
                image={article.urlToImage || placeholderImage}
                alt={article.title}
                sx={mediaStyle}
              />
              <CardContent sx={contentStyle}>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.description}
                </Typography>
                {article.author && (
                  <Typography variant="body2" color="textSecondary">
                    Author: {article.author}
                  </Typography>
                )}
                {article.publishedAt && (
                  <Typography variant="body2" color="textSecondary">
                    Published at: {new Date(article.publishedAt).toLocaleDateString()}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
